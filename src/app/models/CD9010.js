/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CD9010', {
    CD9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD9_TPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD9_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CD9_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CD9_ESPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CD9_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CD9_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD9_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CD9_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CD9_TPOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD9_CHASSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    CD9_CODCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CD9_DSCCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CD9_POTENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CD9_CM3POT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CD9_PESOLI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD9_PESOBR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD9_SERIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CD9_TPCOMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD9_NMOTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                     '
    },
    CD9_CMKG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CD9_DISTEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CD9_RENAVA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD9_ANOMOD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD9_ANOFAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD9_TPPINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD9_TPVEIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD9_ESPVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD9_CONVIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD9_CONVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD9_CODMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CD9_LOTAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD9_TRACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CD9_RESTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD9_CILIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CD9_CORDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    CD9_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'CD9010'
  });
};
