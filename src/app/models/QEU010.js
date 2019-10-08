/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QEU010', {
    QEU_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEU_CODMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEU_NAOCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEU_NUMNC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEU_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QEU_DEMIQI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QEU_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEU_CODNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QEU_REVNC: {
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
    tableName: 'QEU010'
  });
};
