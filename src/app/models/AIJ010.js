/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AIJ010', {
    AIJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AIJ_NROPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AIJ_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AIJ_PROVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AIJ_STAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AIJ_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AIJ_HRINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AIJ_DTLIMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AIJ_HRLIMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AIJ_DTENCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AIJ_HRENCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AIJ_HISTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AIJ_STATUS: {
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
    tableName: 'AIJ010'
  });
};
