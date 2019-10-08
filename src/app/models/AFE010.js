/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AFE010', {
    AFE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFE_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AFE_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AFE_DATAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFE_HORAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AFE_USERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AFE_MEMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                        '
    },
    AFE_DATAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFE_HORAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AFE_USERF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AFE_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFE_FASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFE_FASEOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFE_CODMEM: {
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
    }
  }, {
    tableName: 'AFE010'
  });
};
