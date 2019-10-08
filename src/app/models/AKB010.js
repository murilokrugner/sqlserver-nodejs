/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AKB010', {
    AKB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AKB_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AKB_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AKB_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    AKB_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AKB_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AKB_INDICE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKB_CFGON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AKB_PERMR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AKB_ESTORN: {
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
    }
  }, {
    tableName: 'AKB010'
  });
};
