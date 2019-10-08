/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CT0010', {
    CT0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CT0_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CT0_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CT0_CONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT0_ALIAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CT0_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CT0_OBRIGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT0_CPOCHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CT0_CPODSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CT0_CPOSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CT0_GRPSXG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CT0_F3ENTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CT0_DSCRES: {
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
    }
  }, {
    tableName: 'CT0010'
  });
};
