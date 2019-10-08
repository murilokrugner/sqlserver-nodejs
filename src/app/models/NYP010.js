/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NYP010', {
    NYP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NYP_CAJURI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NYP_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NYP_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NYP_CMOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NYP_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NYP_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NYP_QTPARC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NYP_CBANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NYP_CAGENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NYP_CCONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NYP_DATALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NYP_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NYP_REALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NYP_OBSERV: {
      type: "IMAGE",
      allowNull: true
    },
    NYP_CCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NYP_FONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    NYP_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    NYP_CSTATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NYP_DATAIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NYP_USUIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    NYP_DATAAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NYP_USUAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    NYP_DATALT: {
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
    tableName: 'NYP010'
  });
};
