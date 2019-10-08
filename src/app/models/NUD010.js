/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NUD010', {
    NUD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUD_CPARTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUD_AMINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUD_AMFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUD_CCLIEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUD_CLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUD_CPART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUD_CTPORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NUD_PERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUD_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NUD_DTFIM: {
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
    },
    NUD_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'NUD010'
  });
};
