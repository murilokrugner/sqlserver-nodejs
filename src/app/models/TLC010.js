/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TLC010', {
    TLC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TLC_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TLC_DTGERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TLC_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TLC_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TLC_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TLC_TIPINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TLC_TIPFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TLC_EXTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TLC_EXTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TLC_CCINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TLC_CCFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    TLC_CATEGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLC_CJNINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TLC_CJNFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TLC_USUARI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    }
  }, {
    tableName: 'TLC010'
  });
};
