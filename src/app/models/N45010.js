/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('N45010', {
    N45_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N45_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N45_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N45_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N45_DTNA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N45_RG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    N45_CPF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    N45_SEXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N45_GRAU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N45_LOCN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    N45_CART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    N45_NREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N45_NUML: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    N45_NUMF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
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
    tableName: 'N45010'
  });
};
