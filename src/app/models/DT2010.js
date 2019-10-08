/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DT2010', {
    DT2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT2_CODOCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DT2_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DT2_SERTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT2_TIPOCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT2_RESOCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT2_CATOCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT2_COMSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT2_TIPPND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT2_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT2_MAILDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT2_MAILRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT2_MAILDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT2_MAILCS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT2_MAILDP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT2_ODOCHG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT2_TIPRDP: {
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
    DT2_CDPASR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT2_CDPASD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT2_CODDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DT2_CMPAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT2_LIBAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT2_CODNAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DT2_ALTVLR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT2_MOTDT6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT2_CDTIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DT2_CODAED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    }
  }, {
    tableName: 'DT2010'
  });
};
