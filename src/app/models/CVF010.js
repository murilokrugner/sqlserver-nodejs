/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CVF010', {
    CVF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVF_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CVF_CONTAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CVF_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CVF_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CVF_CTASUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CVF_DESCCG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CVF_NORMAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CVF_COLUNA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CVF_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CVF_TOTVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CVF_VISENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CVF_SLDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CVF_FATSLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CVF_DETHCG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
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
    CVF_TPVALO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CVF_PICTUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                             '
    }
  }, {
    tableName: 'CVF010'
  });
};
