/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SVU010', {
    VU_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VU_MESSPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VU_ANOSPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VU_REG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VU_DTINIOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VU_DTFIMOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VU_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    VU_PRGORI: {
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
    tableName: 'SVU010'
  });
};
