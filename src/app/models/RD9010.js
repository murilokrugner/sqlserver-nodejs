/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RD9010', {
    RD9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD9_CODAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD9_CODADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD9_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD9_DTIAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RD9_DTFAVA: {
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
    }
  }, {
    tableName: 'RD9010'
  });
};
