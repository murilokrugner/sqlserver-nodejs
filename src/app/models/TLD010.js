/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TLD010', {
    TLD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TLD_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TLD_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TLD_CODEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TLD_CODTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TLD_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TLD_DTPREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TLD_DTREAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TLD_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLD_DTINCL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TLD_CODUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TLD_SUBGAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLD_SUBDIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLD_MANGOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLD_VALSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLD_VALCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLD_VALCIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLD_PINTUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLD_MANOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLD_HIDROS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLD_RECARG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLD_USAINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLD_USAINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLD_DIVERS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLD_DTRECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TLD_OBSERV: {
      type: "IMAGE",
      allowNull: true
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
    TLD_CATEGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLD_RECEBI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TLD010'
  });
};
