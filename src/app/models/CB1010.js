/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CB1010', {
    CB1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CB1_CODOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CB1_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CB1_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB1_IDETIQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CB1_CODUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CB1_INTER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CB1_ACAPSM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB1_INVPVC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB1_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    CB1_ALDTHR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB1_ATVCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB1_ROTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    CB1_OPERAC: {
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
    }
  }, {
    tableName: 'CB1010'
  });
};
