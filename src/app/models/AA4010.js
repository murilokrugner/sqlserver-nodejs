/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AA4010', {
    AA4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA4_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA4_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA4_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AA4_NUMSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AA4_PRODAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AA4_NSERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AA4_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA4_LOJAFO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA4_CODFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA4_LOJAFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA4_DTINST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA4_DTGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA4_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    tableName: 'AA4010'
  });
};
