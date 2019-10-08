/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FJ3010', {
    FJ3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FJ3_CODPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FJ3_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FJ3_CONTAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FJ3_CTASUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FJ3_DESCCG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    FJ3_DETHCG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    FJ3_NORMAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJ3_COLUNA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FJ3_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJ3_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJ3_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    FJ3_LINHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FJ3_SEDINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FJ3_SEDFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FJ3_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    FJ3_TOTVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJ3_VISENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJ3_SLDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJ3_FATSLD: {
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
    tableName: 'FJ3010'
  });
};
