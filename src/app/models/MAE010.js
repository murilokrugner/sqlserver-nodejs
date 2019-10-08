/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MAE010', {
    MAE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MAE_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MAE_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MAE_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MAE_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MAE_NUMDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    MAE_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MAE_SITUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MAE_DTAVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MAE_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    MAE_CONTR: {
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
    tableName: 'MAE010'
  });
};
