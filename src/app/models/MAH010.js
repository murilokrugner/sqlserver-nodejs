/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MAH010', {
    MAH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MAH_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MAH_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    MAH_EMISSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MAH_DTCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MAH_HRCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MAH_USERCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    MAH_TRANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MAH_DTTRN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MAH_HRTRN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MAH_USRTRN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    MAH_PDVTRN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    MAH_CXTRN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    MAH_LJTRN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    MAH_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MAH_VLRFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MAH_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MAH_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    MAH_USRCRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'MAH010'
  });
};
