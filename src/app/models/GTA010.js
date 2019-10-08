/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GTA010', {
    GTA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GTA_CODIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GTA_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    GTA_HELPIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    GTA_TIPOIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GTA_REFRES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GTA_DFAULT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GTA_TITCMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    GTA_CMB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    GTA_CMB2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    GTA_CMB3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    GTA_VALINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GTA_VALFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GTA_APREVL: {
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
    tableName: 'GTA010'
  });
};
