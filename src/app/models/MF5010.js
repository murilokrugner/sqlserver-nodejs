/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MF5010', {
    MF5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MF5_ECALIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    MF5_ECIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MF5_ECCCHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    MF5_ECVCHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    MF5_ECFLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MF5_ECDATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MF5_ECHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MF5_ECXML: {
      type: "IMAGE",
      allowNull: true
    },
    MF5_ECPEDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    MF5_ECPEDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    MF5_ECPAGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MF5_ECDTEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    MF5_ECSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    MF5_ECPREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    MF5_ECTITU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    MF5_ECCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MF5_ECENDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MF5_ECSTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    MF5_ECSTAX: {
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
    tableName: 'MF5010'
  });
};
