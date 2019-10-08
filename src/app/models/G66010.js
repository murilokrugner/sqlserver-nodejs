/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('G66010', {
    G66_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    G66_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    G66_TPCPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G66_QTDPAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    G66_QTDDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    G66_QTDIAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    G66_CONTG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G66_FERIAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G66_INCCNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G66_DIAMES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    G66_DIASEM: {
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
    tableName: 'G66010'
  });
};
