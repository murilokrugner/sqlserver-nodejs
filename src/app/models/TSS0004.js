/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TSS0004', {
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    PROCESSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    SEQUENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    SUBPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DESCRICAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DESTINO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DTPROCINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRPROCINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    WSSEND: {
      type: "IMAGE",
      allowNull: true
    },
    WSRECEIVE: {
      type: "IMAGE",
      allowNull: true
    },
    DTPROCFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRPROCFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DETALHES: {
      type: "IMAGE",
      allowNull: true
    },
    SUGESTAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PROCSERVER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    PROCTHREAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    tableName: 'TSS0004'
  });
};
