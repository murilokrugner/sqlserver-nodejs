/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MAI010', {
    MAI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MAI_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MAI_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MAI_QUEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MAI_PERG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MAI_RESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MAI_PONTO: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MAI010'
  });
};
