/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T4E010', {
    T4E_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T4E_MESAPU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T4E_ANOAPU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    T4E_REG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    T4E_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    T4E_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    T4E_DTSAID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    T4E_QTSAID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T4E_DTRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    T4E_QTRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T4E_PRGORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    T4E_SEMRET: {
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
    tableName: 'T4E010'
  });
};
