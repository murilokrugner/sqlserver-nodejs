/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CSD990', {
    CSD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CSD_CODREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CSD_CODVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSD_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CSD_DTFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CSD_CABDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CSD_TPDEM: {
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
    }
  }, {
    tableName: 'CSD990'
  });
};
