/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB6010', {
    TB6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TB6_CODTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TB6_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    TB6_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TB6_PROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TB6_SIGLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TB6_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TB6_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TB6_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TB6_DOCFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TB6_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
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
    tableName: 'TB6010'
  });
};
