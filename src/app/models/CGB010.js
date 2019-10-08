/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CGB010', {
    CGB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CGB_NCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CGB_EXNCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CGB_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CGB_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CGB_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CGB_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CGB_TPTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CGB_TOTPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CGB_DTINIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CGB_DTFIMV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    tableName: 'CGB010'
  });
};
