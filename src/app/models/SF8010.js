/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SF8010', {
    F8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F8_NFDIFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F8_SEDIFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F8_DTDIGIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F8_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F8_LOJTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F8_NFORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F8_SERORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F8_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F8_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F8_TIPO: {
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
    F8_SDOCORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F8_SDOCFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'SF8010'
  });
};
