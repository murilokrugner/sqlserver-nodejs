/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEG010', {
    EG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EG_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EG_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EG_AGENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EG_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EG_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EG_TAXA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EG_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EG_DATARES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EG_IMPOSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EG_VALIOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EG_VALRESG: {
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
    }
  }, {
    tableName: 'SEG010'
  });
};
