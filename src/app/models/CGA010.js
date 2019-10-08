/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CGA010', {
    CGA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CGA_TPREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CGA_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CGA_NCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CGA_EXNCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CGA_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CGA_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CGA_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CGA_TOTPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CGA_TOTFED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CGA_TOTEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CGA_TOTMUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'CGA010'
  });
};
