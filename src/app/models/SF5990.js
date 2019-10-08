/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SF5990', {
    F5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F5_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F5_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F5_TEXTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    F5_APROPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F5_ATUEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F5_TRANMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F5_VAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F5_ENVCQPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F5_LIBPVPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F5_QTDZERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F5_AGREGCU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F5_CODLAN: {
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
      defaultValue: '(0)',
      primaryKey: true
    }
  }, {
    tableName: 'SF5990'
  });
};
