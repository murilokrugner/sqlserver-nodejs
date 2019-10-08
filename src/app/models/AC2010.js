/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AC2010', {
    AC2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AC2_PROVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AC2_STAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AC2_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AC2_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AC2_RELEVA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AC2_SENDWF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AC2_ACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                '
    },
    AC2_AVFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AC2_VLRLIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AC2_DIALIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AC2_AVLPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    AC2_VTOBRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AC2_DDURAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AC2_HDURAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AC2_DNOTIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AC2_HNOTIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    }
  }, {
    tableName: 'AC2010'
  });
};
