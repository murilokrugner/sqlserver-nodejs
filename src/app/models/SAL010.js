/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SAL010', {
    AL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AL_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AL_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AL_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AL_APROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AL_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AL_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AL_LIBAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AL_AUTOLIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AL_TPLIBER: {
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
    },
    AL_DOCAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AL_DOCCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AL_DOCCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AL_DOCMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AL_DOCNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AL_DOCPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AL_DOCSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AL_DOCSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AL_DOCST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AL_DOCIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AL_DOCCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AL_DOCGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AL_PERFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AL_APROSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AL_USERSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'SAL010'
  });
};
