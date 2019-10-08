/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTS010', {
    CTS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTS_CODPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTS_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CTS_CONTAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTS_CTASUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTS_DESCCG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTS_DETHCG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CTS_NORMAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTS_COLUNA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTS_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTS_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTS_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTS_LINHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTS_CT1INI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTS_CT1FIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTS_CTTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTS_CTTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTS_CTDINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTS_CTDFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTS_CTHINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTS_CTHFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTS_TPSALD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTS_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTS_VISENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTS_FATSLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTS_TOTVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTS_SLDENT: {
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
    CTS_PICTUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                             '
    },
    CTS_TPVALO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CTS010'
  });
};
