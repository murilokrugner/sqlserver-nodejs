/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MAG010', {
    MAG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MAG_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MAG_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MAG_EMPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MAG_FILEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MAG_CRITIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    MAG_REGRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    MAG_PESO: {
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
    tableName: 'MAG010'
  });
};
