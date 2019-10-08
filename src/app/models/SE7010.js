/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SE7010', {
    E7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E7_ANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E7_NATUREZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E7_VALJAN1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E7_VALFEV1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E7_VALMAR1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E7_VALABR1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E7_VALMAI1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E7_VALJUN1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E7_VALJUL1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E7_VALAGO1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E7_VALSET1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E7_VALOUT1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E7_VALNOV1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E7_VALDEZ1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E7_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E7_DEBITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E7_CCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E7_ITEMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E7_CLVLDB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E7_CREDIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E7_CCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E7_ITEMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E7_CLVLCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E7_CMOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    E7_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    }
  }, {
    tableName: 'SE7010'
  });
};
