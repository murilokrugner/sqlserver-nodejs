/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TTE010', {
    TTE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TTE_CODFAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TTE_TIPMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TTE_ETAPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TTE_ALTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TTE_MEDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TTE_BAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TTE_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TTE_SEQFAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'TTE010'
  });
};
