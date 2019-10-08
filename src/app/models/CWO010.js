/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CWO010', {
    CWO_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CWO_CODPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CWO_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CWO_TABLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CWO_INDICE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CWO_LLAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CWO_INDVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CWO_CACHE: {
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
    tableName: 'CWO010'
  });
};
