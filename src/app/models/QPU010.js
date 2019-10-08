/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QPU010', {
    QPU_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPU_CODMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPU_NAOCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPU_NUMNC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QPU_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QPU_DEMIQI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QPU_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPU_CODNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QPU_REVNC: {
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
    tableName: 'QPU010'
  });
};
