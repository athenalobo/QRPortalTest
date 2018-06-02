import { it, describe } from 'mocha';
import { assert } from 'chai';
import filter from '../../../serverModules/filters';
import technos from '../../../rest/technologies.json';
describe('filter module for technologies', () => {
  it('should return a new array with merged values', () => {
    const filteredResults = filter( technos );

    assert.deepEqual(filteredResults, [
      {
        id: 1050571,
        name: 'C/C++',
        href: '/mlturl/?u=technologies/-3.json&u=technologies/-2.json&u=technologies/1050571.json&f=id',
        glob: [
          {
            href: 'technologies/-3.json',
            id: -3,
            name: 'C++'
          },
          {
            href: 'technologies/-2.json',
            id: -2,
            name: 'C'
          },
          {
            href: 'technologies/1050571.json',
            id: 1050571,
            name: 'C/C++'
          }]
      },
      {
        id: 139287,
        name: 'PL/SQL',
        href: 'technologies/139287.json'
      },
      {
        id: -10,
        name: 'Forms',
        href: 'technologies/-10.json'
      },
      {
        id: -14,
        name: 'DB2 Server',
        href: 'technologies/-14.json'
      },
      {
        id: -13,
        name: 'SQL Server',
        href: '/mlturl/?u=technologies/-13.json&u=technologies/140998.json&f=id',
        glob: [
          {
            id: -13,
            name: 'SQL Server',
            href: 'technologies/-13.json'
          },
          {
            id: 140998,
            name: 'Microsoft T-SQL',
            href: 'technologies/140998.json'
          }]
      },
      {
        id: 141001,
        name: 'Sybase T-SQL',
        href: 'technologies/141001.json'
      },
      {
        id: 1101000,
        name: 'SQLAnalyzer',
        href: 'technologies/1101000.json'
      },
      {
        id: 140029,
        name: 'JEE',
        href: 'technologies/140029.json'
      },
      {
        id: -9,
        name: 'Visual Basic',
        href: 'technologies/-9.json'
      },
      {
        id: 138383,
        name: 'C#',
        href: 'technologies/138383.json'
      },
      {
        id: 138385,
        name: 'VB.NET',
        href: 'technologies/138385.json'
      },
      {
        id: -19,
        name: 'ASP',
        href: 'technologies/-19.json'
      },
      {
        id: -4,
        name: 'Cobol',
        href: 'technologies/-4.json'
      },
      {
        id: -8,
        name: 'PowerBuilder',
        href: 'technologies/-8.json'
      },
      {
        id: -15,
        name: 'SAP',
        href: '/mlturl/?u=technologies/-15.json&u=technologies/-20.json&f=id',
        glob: [{
          id: -15,
          name: 'ABAP',
          href: 'technologies/-15.json'
        },
        {
          id: -20,
          name: 'SAP SQL',
          href: 'technologies/-20.json'
        }]
      },
      {
        id: 0,
        name: 'ALL TECHNOLOGIES',
        href: 'technologies/0.json'
      },
      {
        id: -23,
        name: 'Business Object',
        href: 'technologies/-23.json'
      },
      {
        id: 1020000,
        name: 'HTML5 JavaScript',
        href: '/mlturl/?u=technologies/138663.json&u=technologies/1020000.json&f=id',
        glob: [{
          id: 138663,
          name: 'JavaScript',
          href: 'technologies/138663.json'
        },{
          id: 1020000,
          name: 'HTML5',
          href: 'technologies/1020000.json',
        }]
      },
      {
        id: 1021000,
        name: 'Python',
        href: 'technologies/1021000.json'
      },
      {
        id: 1050001,
        name: 'Objective-C',
        href: 'technologies/1050001.json'
      },
      {
        id: 1004000,
        name: 'PLI',
        href: '/mlturl/?u=technologies/1004000.json&u=technologies/1005000.json&f=id',
        glob: [{
          id: 1004000,
          name: 'PLI',
          href: 'technologies/1004000.json'
        },
        {
          id: 1005000,
          name: 'PLC',
          href: 'technologies/1005000.json'
        }]
      },
      {
        id: 1006000,
        name: 'Fortran',
        href: 'technologies/1006000.json'
      },
      {
        id: 1007000,
        name: 'Flex',
        href: 'technologies/1007000.json'
      },
      {
        id: 1015000,
        name: 'EGL',
        href: 'technologies/1015000.json'
      },
      {
        id: 1016000,
        name: 'Shell',
        href: 'technologies/1016000.json'
      },
      {
        id: 1017000,
        name: 'PHP',
        href: 'technologies/1017000.json'
      },
      {
        id: 1008000,
        name: 'RPG',
        href: '/mlturl/?u=technologies/1008000.json&u=technologies/1009000.json&u=technologies/1011000.json&u=technologies/1012000.json&f=id',
        glob:[{
          id: 1008000,
          name: 'RPG400',
          href: 'technologies/1008000.json'
        },
        {
          id: 1009000,
          name: 'RPG300',
          href: 'technologies/1009000.json'
        },
        {
          id: 1011000,
          name: 'DDS400',
          href: 'technologies/1011000.json'
        },
        {
          id: 1012000,
          name: 'CL400',
          href: 'technologies/1012000.json'
        }]
      },
      {
        id: 1018000,
        name: 'TIBCO',
        href: 'technologies/1018000.json'
      },
      {
        id: 138636,
        name: 'ASP.NET',
        href: 'technologies/138636.json'
      },
      {
        id: 1520000,
        name: 'Siebel',
        href: 'technologies/1520000.json'
      },
      {
        id: 1600000,
        name: 'PeopleSoft',
        href: 'technologies/1600000.json'
      }
    ]);
  });
});