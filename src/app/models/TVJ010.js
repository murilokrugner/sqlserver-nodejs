/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TVJ010', {
    TVJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TVJ_FOLHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TVJ_OBRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TVJ_POSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TVJ_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TVJ_DTABAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TVJ_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TVJ_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TVJ_PROD01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TVJ_PROD02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TVJ_PROD03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TVJ_PROD04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TVJ_PROD05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TVJ_PROD06: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TVJ_PROD07: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TVJ_USUARI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
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
    tableName: 'TVJ010'
  });
};
