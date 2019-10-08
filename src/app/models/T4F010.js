/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T4F010', {
    T4F_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T4F_MESAPU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T4F_ANOAPU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    T4F_REG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    T4F_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    T4F_QTDCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T4F_QTDRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T4F_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    T4F_PRGORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    tableName: 'T4F010'
  });
};
