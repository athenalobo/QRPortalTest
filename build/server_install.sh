#!/bin/bash
# service name: releasenotemanager.service
# set -x
 
display_usage()
{
   echo "usage:"
   echo "$0 -p <package_path> -r <port>"
   exit 1
}

unset PACKPATH
unset SRVPORT
while getopts "p:r:l:u:a:t:d:" OPT; do
   case $OPT in
      p) PACKPATH=${OPTARG};;
      r) SRVPORT=${OPTARG};;
      \?) display_usage ; exit 1;;
   esac
done
[ -z "$PACKPATH" ] && display_usage && exit 1
[ -z "$SRVPORT" ] && display_usage && exit 1

PACKDIR=`dirname $0`
SERVERDIR="/var/opt/technologies_server"
BACKUPDIR="$PACKDIR/../backups"
TMPFIC=/tmp/technologies_server_install.tmp
SRVHOST=`hostname`
export PORT=$SRVPORT

echo
echo Server installation is: $SERVERDIR
echo Package path is: $PACKPATH
if [ ! -f $PACKPATH ]; then
	echo ERROR
	echo The package file $PACKPATH does not exist.
	exit 1
fi

if [ ! -d $SERVERDIR ]; then
	echo ERROR
	echo Folder $SERVERDIR must exist, and user $USER must have write access to it
	exit 1
fi
touch $SERVERDIR/test
if [ $? -ne 0 ]; then
	echo ERROR
	echo user $USER must have write access to folder $SERVERDIR 
	exit 1
fi
cd $SERVERDIR
rm -r *
cd -

tar xzf $PACKPATH -C $SERVERDIR >$TMPFIC 2>&1
if [ $? -ne 0 ]; then
	echo ERROR
	echo Untar of the package fails.
	cat $TMPFIC
	exit 1
fi

[ -d $BACKUPDIR ] || mkdir $BACKUPDIR
cp $PACKPATH $BACKUPDIR || exit 1
echo
cd $BACKUPDIR
echo "Package has been backuped in $BACKUPDIR"
NBPACK=`find . -name '*.taz' | wc -l`
echo
echo Number of packages in the backup: $NBPACK
if [ "$NBPACK" -gt "10" ];then
    echo Cleaning:
    ls -1t | tail -n $(($NBPACK - 10))
    ls -1t | tail -n $(($NBPACK - 10)) | xargs rm -fdr
fi

cd $SERVERDIR
echo
echo Installing server on port: $SRVPORT

echo
echo "=============================================="
echo "=============================================="
mkdir -p $SERVERDIR/NodeJS/etc
echo "prefix=$SERVERDIR">$SERVERDIR/NodeJS/etc/npmrc

echo
echo "=============================================="
echo "=============================================="
echo "Starting the server ...."
sudo systemctl daemon-reload
sudo systemctl stop technologies.service
sudo systemctl enable technologies.service
sudo systemctl start technologies.service
sudo systemctl status technologies.service>$TMPFIC 2>&1
grep " active (running)" $TMPFIC
if [ $? -ne 0 ]; then
	echo ERROR
	echo Cannot start the service
	cat $TMPFIC
    echo ================================================
    echo ================================================
    echo Journal:
    echo ================================================
    sudo journalctl -xe
    echo ================================================
    echo ================================================
	exit 1
fi
sleep 15
curl http://localhost:$SRVPORT >$TMPFIC 2>&1
if [ $? -ne 0 ]; then
	cat $TMPFIC
	echo ERROR
	echo The server did not respond....
    echo ================================================
    echo ================================================
    echo Journal:
    echo ================================================
    sudo journalctl -xe
    echo ================================================
    echo ================================================
	exit 1
fi


echo
echo "=============================================="
echo "=============================================="
echo Installation is successful.

exit 0
