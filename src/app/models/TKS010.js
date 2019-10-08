/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TKS010', {
    TKS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TKS_CODCJN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TKS_BEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TKS_DESCJN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TKS_FAMCJN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TKS_CCCJN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TKS_LOCCJN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TKS_TURCJN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TKS_MARCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TKS_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TKS_CAPACI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TKS_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TKS_DTMANU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TKS_ANOFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    TKS_DTCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TKS_FABRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TKS_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TKS_LOJA: {
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
    TKS_UNIMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'TKS010'
  });
};
