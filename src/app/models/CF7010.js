/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CF7010', {
    CF7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF7_PER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CF7_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CF7_DESCPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CF7_TPREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF7_CLIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CF7_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF7_CNPJC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CF7_TPCLIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF7_RECIND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF7_FAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF7_RECEB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF7_BCAJUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF7_BCDIFE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF7_BCDFAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF7_TPAJUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF7_CODCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF7_CODAJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF7_ALQPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF7_AJUPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF7_ALQCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF7_AJUCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF7_PISDIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF7_COFDIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF7_DFPISA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF7_DFCOFA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF7_DTPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    }
  }, {
    tableName: 'CF7010'
  });
};
