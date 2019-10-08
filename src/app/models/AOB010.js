/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AOB010', {
    AOB_IDNOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AOB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AOB_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AOB_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    AOB_OWNER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AOB_DTNOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AOB_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AOB_CONTEU: {
      type: "IMAGE",
      allowNull: true
    },
    AOB_DTINCL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AOB_MSBLQL: {
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
    tableName: 'AOB010'
  });
};
