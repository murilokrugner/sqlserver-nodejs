/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPA010', {
    PA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PA_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PA_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    PA_HRNORM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_DSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_ADNOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_ADNOTEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_PAGINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PA_PGADNIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PA_PAGINTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_PGANIDN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_PAGHEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                        '
    },
    PA_PGHEDNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    PA_DESCDSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_FALTAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_ATRASOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_REFEIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_SAIANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_SAIEXPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_FERIADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_INTFALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_PERDDSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_FAIXAHE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_PERANOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_PERHEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_PERATRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_PERSAIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_PERHMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_PERIMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_PAGAINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_TOLNOTU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PA_TOLNTHE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PA_TOLHEPE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PA_TOLATRA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PA_NUMATRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PA_TOLSAIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PA_TOLASAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                       '
    },
    PA_TOLHEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                       '
    },
    PA_TOLFALT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PA_HRMOVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_INMOVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_ANTMOVE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PA_POSMOVE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PA_MOVAINT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PA_MOVPINT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PA_CHKTMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_CHKTMVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_AJUSTIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_AJUSTEJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_MARCAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                        '
    },
    PA_ALEATOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_MINALEA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PA_AUTOMSM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_COMPMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_HRSPGS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PA_ADHEDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_PRIMDOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_DESCLAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_FESTLAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_ASSIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PA_NORMFOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PA_RHEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    PA_TOLHRNR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PA_ADNTPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_TPAPONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_RECBENF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_PERPADN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_PGINTOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PA_PGBHSEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SPA010'
  });
};
