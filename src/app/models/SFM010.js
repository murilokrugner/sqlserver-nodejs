/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFM010', {
    FM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FM_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FM_TE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FM_TS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FM_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FM_LOJACLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FM_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FM_LOJAFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FM_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FM_GRTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FM_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    FM_GRPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FM_POSIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FM_REFGRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                          '
    },
    FM_DESREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
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
    FM_TIPOMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FM_GRPTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    FM_TIPOCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FM_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FM_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    FM_GRPCST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FM_TPCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'SFM010'
  });
};
