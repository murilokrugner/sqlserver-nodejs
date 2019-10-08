/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TY8010', {
    TY8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TY8_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TY8_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TY8_CODEPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TY8_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TY8_DTREAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TY8_QUESTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TY8_QUESTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TY8_RESPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TY8_DESCRI: {
      type: "IMAGE",
      allowNull: true
    },
    TY8_USERGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    TY8_APROVA: {
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
    }
  }, {
    tableName: 'TY8010'
  });
};
