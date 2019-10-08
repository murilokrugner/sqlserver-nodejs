/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TOB010', {
    TOB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TOB_CODFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TOB_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TOB_TEXTO: {
      type: "IMAGE",
      allowNull: true
    },
    TOB_TERMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TOB_CODRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TOB_DTELAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TOB_DTREVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TOB_DOCFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TOB_DOCTO: {
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
    },
    TOB_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    }
  }, {
    tableName: 'TOB010'
  });
};
