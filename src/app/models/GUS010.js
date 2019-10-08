/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GUS010', {
    GUS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GUS_FILCTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GUS_CTTRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CCTRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CTTRPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CCTRPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CTTRCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CCTRCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CTICMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CCICMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CTPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CCPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CTCOFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CCCOFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CTPROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CCCTPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CTFRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CCFRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CTISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CCISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CTINSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CCINSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CTSEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CCSEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CTIRRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CCIRRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CTTRIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    GUS_CCTRIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
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
    tableName: 'GUS010'
  });
};
